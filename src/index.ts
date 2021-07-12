import { Rule, TEXT, NONTERM, PATTERN } from './rule';
import { ParserContext } from './parser-context';
import { FirstCtx, getFirst } from './util';

/*

inlines
	= inlines inline
	/ inline

inline
	= big
	/ bold
	/ char

big
	= "***" inlines "***"

bold
	= "**" inlines "**"

char
	= .

*/

function parse(input: string) {

	console.log(`input: "${input}"`);

	const rules: Rule[] = [
		{
			name: 'inlines',
			seq: [NONTERM('inlines'), NONTERM('inline')]
		},
		{
			name: 'inlines',
			seq: [NONTERM('inline')]
		},
		{
			name: 'inline',
			seq: [NONTERM('big')]
		},
		{
			name: 'inline',
			seq: [NONTERM('bold')]
		},
		{
			name: 'inline',
			seq: [NONTERM('char')]
		},
		{
			name: 'big',
			seq: [TEXT('***'), NONTERM('inlines'), TEXT('***')]
		},
		{
			name: 'bold',
			seq: [TEXT('**'), NONTERM('inlines'), TEXT('**')]
		},
		{
			name: 'char',
			seq: [PATTERN('.')]
		}
	];

	const firstCtx: FirstCtx = { rules, firstTable: [] };
	while (true) {
		let changed = false;
		for (const [index] of firstCtx.rules.entries()) {
			if (getFirst(index, firstCtx)) {
				changed = true;
			}
		}
		if (!changed) break;
	}
	for (const [index, first] of firstCtx.firstTable.entries()) {
		console.log(`first[${index}]:`);
		for (const item of first.items) {
			console.log('  ', item);
		}
	}

	// const ctx = new ParserContext(input);

	// for (const rule of first) {
	// 	switch (rule.seq[0].type) {
	// 		case 'text':
	// 			const token = ctx.seek(rule.seq[0].value.length);
	// 			if (token == rule.seq[0].value) {
	// 				console.log('text matched');
	// 				console.log(`token: "${token}"`);
	// 				console.log('rule:', rule);
	// 			}
	// 			break;
	// 		case 'pattern':
	// 			const result = new RegExp(`^${rule.seq[0].value}`).exec(ctx.input.substr(ctx.pos));
	// 			if (result != null) {
	// 				console.log('pattern matched');
	// 				console.log('result:', result[0]);
	// 				console.log('rule:', rule);
					
	// 			}
	// 			break;
	// 	}
	// }
}

const result = parse('***abc***');
// console.log(result);
