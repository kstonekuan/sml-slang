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

PRIMITIVE: INT | REAL | BOOL | UNIT | CHAR | STRING;
LIST:
	L_BRACKET PRIMITIVE (COMMA PRIMITIVE)* R_BRACKET
	| LIST_NIL;

// list are linked list that starts from head to tail
LIST_NIL: 'nil';
LIST_CONSTRUCT: '::';
LIST_CONCAT: '@';

TUPLE: L_PAREN PRIMITIVE (COMMA PRIMITIVE)* R_PAREN;

/*
 * Productions
 */
start: statement+;

statement:
	declaration		# declarationStatement
	| expression	# expressionStatement;

variable: VAL name = IDENTIFIER EQUALS value = expression;

function:
	FUN name = IDENTIFIER (
		identifierArg = IDENTIFIER
		| identifierParenthesisArg = L_PAREN IDENTIFIER R_PAREN
		| identifierTupleArg = IDENTIFIER_TUPLE
	) EQUALS body = expression;

localBlock:
	LOCAL declarations = declaration+ IN body = declaration+ END;

declaration:
	variable		# variableDeclaration
	| function		# functionDeclaration
	| localBlock	# localBlockDeclaration;

conditional:
	IF predicate = expression THEN consequent = expression ELSE alternative = expression;

letBlock:
	LET declarations = declaration+ IN body = expression END;

apply:
	(
		identifierApply = IDENTIFIER
		| lambdaApply = lambda
		| structNameApply = IDENTIFIER DOT structMethodApply = IDENTIFIER
	) arg = expression;

lambda:
	FN (
		identifierArg = IDENTIFIER
		| identifierParenthesisArg = L_PAREN IDENTIFIER R_PAREN
		| identifierTupleArg = IDENTIFIER_TUPLE
	) DOUBLE_ARROW body = expression;

patternMatch:
	CASE name = IDENTIFIER OF firstCase = expression DOUBLE_ARROW firstResult = expression (
		NEXT_PATTERN nextCase = expression DOUBLE_ARROW nextResult = expression
	)*;

expression:
	PRIMITIVE												# literalExpression
	| IDENTIFIER											# identifierExpression
	| TUPLE													# tupleExpression
	| LIST													# listExpression
	| conditional											# conditionalExpression
	| apply													# applyExpression
	| lambda												# lambdaExpression
	| L_PAREN inner = expression R_PAREN					# paranthesesExpression
	| left = expression operator = BINOP right = expression	# binaryOperatorExpression
	| operator = UNOP expr = expression						# unaryOperatorExpression
	| letBlock												# letBlockExpression
	| patternMatch											# patternMatchExpression
	| name = IDENTIFIER DOT attribute = IDENTIFIER			# structAttributeExpression;
	// accessing a struct’s attribute
type:
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

typeDefinition: VAL IDENTIFIER COLON type;

moduleSignature:
	SIGNATURE name = IDENTIFIER EQUALS SIG typeDefinition+ END;

structDeclaration: variable | function;

structBlock: STRUCT structDeclaration+ END;

moduleStructure:
	STRUCTURE name = IDENTIFIER EQUALS (
		structBlock
		| functorApply
	);

functorApply:
	functorName = IDENTIFIER L_PAREN structName = IDENTIFIER R_PAREN;

functorDef:
	FUNCTOR name = IDENTIFIER L_PAREN structName = IDENTIFIER COLON sigName = IDENTIFIER R_PAREN
		EQUALS structBlock;

