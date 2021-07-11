import { Rule, TEXT, isTextItem, NONTERM, isNonTermItem, PATTERN, isPatternItem } from './rule';
import { ParserContext } from './parser-context';

/*

inlines
	= inlines inline
	/ inline

inline
	= bold
	/ char

bold
	= "**" inlines "**"

char
	= .

*/

const rules: Rule[] = [
	{
		name: 'inlines',
		seqs: [
			[NONTERM('inlines'), NONTERM('inline')],
			[NONTERM('inline')]
		]
	},
	{
		name: 'inline',
		seqs: [
			[NONTERM('bold')],
			[NONTERM('char')]
		]
	},
	{
		name: 'bold',
		seqs: [
			[TEXT('**'), NONTERM('inlines'), TEXT('**')]
		]
	},
	{
		name: 'char',
		seqs: [
			[PATTERN('.')]
		]
	}
];

function parse(input: string) {
	const ctx = new ParserContext(input);

	if (ctx.seek(2) == '**') {

	}

}

const result = parse('**abc**');
console.log(result);
