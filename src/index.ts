import { Rule, TEXT, NONTERM, PATTERN } from './rule';

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
