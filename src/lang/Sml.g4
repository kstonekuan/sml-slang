grammar Sml;

/*
 * Tokens (terminal)
 */

VAL: 'val';
LET: 'let';
LOCAL: 'local';
IN: 'in';
END: 'end';
FUN: 'fun';
FN: 'fn';
DOUBLE_ARROW: '=>';
REC: 'rec';
IF: 'if';
THEN: 'then';
ELSE: 'else';
CASE: 'case';
OF: 'of';
NEXT_PATTERN: '|';
WILD_CARD_PATTERN: '_';
ASSIGN: '=';

// Punctuation
L_CURLY: '{';
R_CURLY: '}';
L_BRACKET: '[';
R_BRACKET: ']';
COMMA: ',';
SEMI: ';';
COLON: ':';
DOT: '.';
// No Assign / reassignment in our language

// Relation operators
EQUALS: '==';
NOT_EQUALS: '<>';
LESS: '<';
LESS_OR_EQUALS: '<=';
GREATER: '>';
GREATER_OR_EQUALS: '>=';

// Unary operators
INT_NEGATE: '~';
REAL_NEGATE: '~.';
NOT: 'not';

// Binary operators
INT_MUL: '*';
INT_DIV: 'div';
INT_ADD: '+';
INT_SUB: '-';
REAL_MUL: '*.';
REAL_DIV: '/';
REAL_ADD: '+.';
REAL_SUB: '-.';
STRING_CONCAT: '^';
AND: 'andalso';
OR: 'orelse';

INT: [0-9]+;
REAL: INT+ DOT INT+;
BOOL: 'true' | 'false';
UNIT: '()';
CHAR: '#"' ~["] '"';
STRING: '"' ~["]* '"';

// list are linked list that starts from head to tail
LIST_NIL: 'nil';
LIST_CONSTRUCT: '::';
LIST_CONCAT: '@';

IDENTIFIER: [_a-z][_a-zA-Z0-9']*;

WHITESPACE: [ \r\n\t]+ -> skip;

/*
 * Productions
 */
start: (statements += statement)+;

statement:
	body = declaration	# declarationStatement
	| body = expression	# expressionStatement;

variable: VAL name = IDENTIFIER ASSIGN value = expression;

letrec: VAL REC name = IDENTIFIER ASSIGN value = expression;

functionUnit:
	FUN name = IDENTIFIER UNIT ASSIGN body = expression;

function:
	FUN name = IDENTIFIER '(' first = IDENTIFIER (
		COMMA rest += IDENTIFIER
	)* ')' ASSIGN body = expression;

declaration:
	body = variable			# variableDeclaration
	| body = letrec			# letrecDeclaration
	| body = functionUnit	# functionUnitDeclaration
	| body = function		# functionDeclaration
	| LOCAL (declarations += declaration)+ IN (
		body += declaration
	)+ END # localBlockDeclaration;

binop:
	(
		EQUALS
		| NOT_EQUALS
		| LESS
		| LESS_OR_EQUALS
		| GREATER
		| GREATER_OR_EQUALS
	)												# compareBinop
	| (INT_MUL | INT_ADD | INT_SUB | INT_DIV)		# intBinop
	| (REAL_MUL | REAL_ADD | REAL_SUB | REAL_DIV)	# realBinop
	| STRING_CONCAT									# stringBinop
	| (AND | OR)									# boolBinop
	| LIST_CONSTRUCT								# listConstructBinop
	| LIST_CONCAT									# listConcatBinop;
// LIST_CONCAT, left and right expressions have to be a list LIST_CONSTRUCT go from right to left,
// and rightmost has to be a list

unop:
	INT_NEGATE		# intUnop
	| REAL_NEGATE	# realUnop
	| NOT			# boolUnop;

list:
	L_BRACKET first = expression (COMMA rest += expression)* R_BRACKET	# expressionList
	| LIST_NIL															# nilList;

lambdaUnit: FN UNIT DOUBLE_ARROW body = expression;

lambda:
	FN '(' first = IDENTIFIER (COMMA rest += IDENTIFIER)* ')' DOUBLE_ARROW body = expression;

parentheses: '(' inner = expression ')';

applyUnit: identifierApply = identifier UNIT;

apply:
	identifierApply = identifier arg = '(' first = expression (
		COMMA rest += expression
	)* ')';

identifier: IDENTIFIER;

// abstracted out of patternMatchExpression
otherPattern:
	NEXT_PATTERN nextCase = expression DOUBLE_ARROW nextResult = expression		# nextPattern
	| NEXT_PATTERN WILD_CARD_PATTERN DOUBLE_ARROW wildCardResult = expression	# wildCardPattern;

expression:
	body = applyUnit																			# applyUnitExpression
	| body = apply																				# applyExpression
	| INT																						# intExpression
	| REAL																						# realExpression
	| BOOL																						# boolExpression
	| UNIT																						# unitExpression
	| CHAR																						# charExpression
	| STRING																					# stringExpression
	| body = identifier																			# identifierExpression
	| body = parentheses																		# parenthesesExpression
	| body = list																				# listExpression
	| IF predicate = parentheses THEN consequent = parentheses ELSE alternative = parentheses	#
		conditionalExpression
	| body = lambdaUnit												# lambdaUnitExpression
	| body = lambda													# lambdaExpression
	| left = expression operator = binop right = expression			# binaryOperatorExpression
	| operator = unop expr = expression								# unaryOperatorExpression
	| LET (declarations += declaration)+ IN body = expression END	# letBlockExpression
	| CASE value = expression OF firstCase = expression DOUBLE_ARROW firstResult = expression (
		otherPatterns += otherPattern
	)* # patternMatchExpression;
