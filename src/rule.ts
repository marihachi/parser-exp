// Nonterminal symbol
export type NonTermItem = { type: 'nonterm', name: string };

export function NONTERM(name: string): NonTermItem {
	return { type: 'nonterm', name };
}

// text terminal symbol
export type TextItem = { type: 'text', value: string };

export function TEXT(value: string): TextItem {
	return { type: 'text', value };
}

// pattern terminal symbol
export type PatternItem = { type: 'pattern', value: string };

export function PATTERN(value: string): PatternItem {
	return { type: 'pattern', value };
}

export type SeqItem = NonTermItem | TextItem | PatternItem;

export type Rule<T extends SeqItem[] = SeqItem[]> = {
	name: string;
	seq: T;
};
