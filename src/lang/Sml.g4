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
ASSIGN: '=';

// TYPE_INT: 'int'; TYPE_REAL: 'real'; TYPE_STRING: 'string'; TYPE_CHAR: 'char'; TYPE_BOOL: 'bool';
// TYPE_UNIT: 'unit'; TYPE_LIST: 'list'; SINGLE_ARROW: '->'; SIGNATURE: 'signature'; SIG: 'sig';
// STRUCTURE: 'structure'; STRUCT: 'struct'; FUNCTOR: 'functor';

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
NEGATE: '~';

// Binary operators
POW: '^';
MUL: '*';
DIV: '/';
ADD: '+';
SUB: '-';

INT: [0-9]+;
REAL: INT+ DOT INT+;
BOOL: 'true' | 'false';
UNIT: '()';
CHAR: '"' ~["] '"';
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

// identifierTuple: '(' first = IDENTIFIER (COMMA rest += IDENTIFIER)+ ')';

variable: VAL name = IDENTIFIER ASSIGN value = expression;

letrec: VAL REC name = IDENTIFIER ASSIGN value = expression;

function:
	FUN name = IDENTIFIER '(' first = IDENTIFIER (
		COMMA rest += IDENTIFIER
	)* ')' ASSIGN body = expression;

declaration:
	body = variable		# variableDeclaration
	| body = letrec		# letrecDeclaration
	| body = function	# functionDeclaration
	| LOCAL (declarations += declaration)+ IN (
		body += declaration
	)+ END # localBlockDeclaration;

binop:
	EQUALS
	| NOT_EQUALS
	| LESS
	| LESS_OR_EQUALS
	| GREATER
	| GREATER_OR_EQUALS
	| POW
	| MUL
	| DIV
	| ADD
	| SUB
	| LIST_CONSTRUCT
	| LIST_CONCAT;
// LIST_CONCAT, left and right expressions have to be a list LIST_CONSTRUCT go from right to left,
// and rightmost has to be a list

unop: NEGATE;

list:
	L_BRACKET first = expression (COMMA rest += expression)* R_BRACKET	# expressionList
	| LIST_NIL															# nilList;

lambda:
	FN '(' first = IDENTIFIER (COMMA rest += IDENTIFIER)* ')' DOUBLE_ARROW body = expression;

parentheses: '(' inner = expression ')';

apply:
	(
		identifierApply = identifier
		// | structNameApply = IDENTIFIER DOT structMethodApply = IDENTIFIER
	) arg = '(' first = expression (COMMA rest += expression)* ')';

identifier: IDENTIFIER;

expression:
	INT						# intExpression
	| REAL					# realExpression
	| BOOL					# boolExpression
	| UNIT					# unitExpression
	| CHAR					# charExpression
	| STRING				# stringExpression
	| body = apply			# applyExpression
	| body = identifier		# identifierExpression
	| body = parentheses	# parenthesesExpression
	// | '(' first = expression (COMMA rest += expression)+ ')'									# tupleExpression
	| body = list																				# listExpression
	| IF predicate = parentheses THEN consequent = parentheses ELSE alternative = parentheses	#
		conditionalExpression
	| body = lambda													# lambdaExpression
	| left = expression operator = binop right = expression			# binaryOperatorExpression
	| operator = unop expr = expression								# unaryOperatorExpression
	| LET (declarations += declaration)+ IN body = expression END	# letBlockExpression
	| CASE value = identifier OF firstCase = expression DOUBLE_ARROW firstResult = expression (
		otherPatterns += nextPattern
	)* # patternMatchExpression;
// | name = IDENTIFIER DOT attribute = IDENTIFIER # structAttributeExpression; TODO accessing a
// struct’s attribute

// abstracted out of patternMatchExpression
nextPattern:
	NEXT_PATTERN nextCase = expression DOUBLE_ARROW nextResult = expression;

// type: // TODO TYPE_INT | TYPE_REAL | TYPE_BOOL | TYPE_UNIT | TYPE_STRING | TYPE_CHAR | type
// TYPE_LIST // list | type MUL type // tuple | type SINGLE_ARROW type // function | '(' type ')';

// typeDefinition: VAL IDENTIFIER COLON type; // TODO

// moduleSignature: // TODO SIGNATURE name = IDENTIFIER ASSIGN SIG typeDefinition+ END;

// structBlock: STRUCT (variable | function)+ END; // TODO

// moduleStructure: // TODO STRUCTURE name = IDENTIFIER ASSIGN ( structBlock | functorApply );

// functorApply: // TODO functorName = IDENTIFIER '(' structName = IDENTIFIER ')';

// functorDef: // TODO FUNCTOR name = IDENTIFIER '(' structName = IDENTIFIER COLON sigName =
// IDENTIFIER ')' ASSIGN structBlock;

