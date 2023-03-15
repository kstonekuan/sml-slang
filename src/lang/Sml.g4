grammar Sml;

/*
 * Tokens (terminal)
 */
CHAR: '"' ~["] '"';
STRING: '"' ~["]* '"';

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

TYPE_INT: 'int';
TYPE_REAL: 'real';
TYPE_STRING: 'string';
TYPE_CHAR: 'char';
TYPE_BOOL: 'bool';
TYPE_UNIT: 'unit';
TYPE_LIST: 'list';
SINGLE_ARROW: '->';
SIGNATURE: 'signature';
SIG: 'sig';
STRUCTURE: 'structure';
STRUCT: 'struct';
FUNCTOR: 'functor';

// Punctuation
L_PAREN: '(';
R_PAREN: ')';
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
EQUALS: '='; // Declaration is equals too
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

BINOP:
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

UNOP: NEGATE;

INT: [0-9]+;
REAL: INT+ DOT INT+;
BOOL: 'true' | 'false';
UNIT: '()';
IDENTIFIER: '[_a-z][_a-zA-Z0-9\']*';

IDENTIFIER_TUPLE:
	L_PAREN IDENTIFIER (COMMA IDENTIFIER)* R_PAREN;

WHITESPACE: [ \r\n\t]+ -> skip;

// list are linked list that starts from head to tail
LIST_NIL: 'nil';
LIST_CONSTRUCT: '::';
LIST_CONCAT: '@';

/*
 * Productions
 */
start: (statements += statement)+;

statement:
	body = declaration	# declarationStatement
	| body = expression	# expressionStatement;

variable: VAL name = IDENTIFIER EQUALS value = expression;

function:
	FUN name = IDENTIFIER (
		identifierArg = IDENTIFIER
		| L_PAREN identifierParenthesisArg = IDENTIFIER R_PAREN
		| identifierTupleArg = IDENTIFIER_TUPLE
	) EQUALS body = expression;

declaration:
	body = variable		# variableDeclaration
	| body = function	# functionDeclaration
	| LOCAL (declarations += declaration)+ IN (
		body += declaration
	)+ END # localBlockDeclaration;

literal:
	value = INT			# intLiteral
	| value = REAL		# realLiteral
	| value = BOOL		# boolLiteral
	| value = UNIT		# unitLiteral
	| value = CHAR		# charLiteral
	| value = STRING	# stringLiteral;

list:
	L_BRACKET first = literal (COMMA rest += literal)* R_BRACKET	# literalList
	| LIST_NIL														# nilList;

lambda:
	FN (
		identifierArg = IDENTIFIER
		| L_PAREN identifierParenthesisArg = IDENTIFIER R_PAREN
		| identifierTupleArg = IDENTIFIER_TUPLE
	) DOUBLE_ARROW body = expression;

expression:
	body = literal																			# literalExpression
	| name = IDENTIFIER																		# identifierExpression
	| L_PAREN first = literal (COMMA rest += literal)+ R_PAREN								# tupleExpression
	| body = list																			# listExpression
	| IF predicate = expression THEN consequent = expression ELSE alternative = expression	#
		conditionalExpression
	| (
		identifierApply = IDENTIFIER
		| lambdaApply = lambda
		| structNameApply = IDENTIFIER DOT structMethodApply = IDENTIFIER
	) arg = expression												# applyExpression
	| body = lambda													# lambdaExpression
	| L_PAREN inner = expression R_PAREN							# paranthesesExpression
	| left = expression operator = BINOP right = expression			# binaryOperatorExpression
	| operator = UNOP expr = expression								# unaryOperatorExpression
	| LET (declarations += declaration)+ IN body = expression END	# letBlockExpression
	| CASE name = IDENTIFIER OF firstCase = expression DOUBLE_ARROW firstResult = expression (
		otherPatterns += nextPattern
	)*												# patternMatchExpression
	| name = IDENTIFIER DOT attribute = IDENTIFIER	# structAttributeExpression; // TODO
// accessing a struct’s attribute

// abstracted out of patternMatchExpression
nextPattern:
	NEXT_PATTERN nextCase = expression DOUBLE_ARROW nextResult = expression;

type: // TODO			
	TYPE_INT
	| TYPE_REAL
	| TYPE_BOOL
	| TYPE_UNIT
	| TYPE_STRING
	| TYPE_CHAR
	| type TYPE_LIST // list
	| type MUL type // tuple
	| type SINGLE_ARROW type // function
	| L_PAREN type R_PAREN;

typeDefinition: VAL IDENTIFIER COLON type; // TODO

moduleSignature: // TODO
	SIGNATURE name = IDENTIFIER EQUALS SIG typeDefinition+ END;

structBlock: STRUCT (variable | function)+ END; // TODO

moduleStructure: // TODO
	STRUCTURE name = IDENTIFIER EQUALS (
		structBlock
		| functorApply
	);

functorApply: // TODO
	functorName = IDENTIFIER L_PAREN structName = IDENTIFIER R_PAREN;

functorDef: // TODO
	FUNCTOR name = IDENTIFIER L_PAREN structName = IDENTIFIER COLON sigName = IDENTIFIER R_PAREN
		EQUALS structBlock;

