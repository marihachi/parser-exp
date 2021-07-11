import { PatternItem, Rule, SeqItem, TextItem } from './rule';

export function getFirst(rules: Rule[]) {
	const first = [];
	for (const rule of rules) {
		if (rule.seq.length > 0) {
			switch (rule.seq[0].type) {
				case 'text':
					first.push(rule as Rule<[TextItem, ...SeqItem[]]>);
					break;
				case 'pattern':
					first.push(rule as Rule<[PatternItem, ...SeqItem[]]>);
					break;
			}
		}
	}

	return first;
}
