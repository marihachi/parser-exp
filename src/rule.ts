// Nonterminal symbol
export type NonTermItem = { id: number, type: 'nonterm', name: string };

export function NONTERM(id: number, name: string): NonTermItem {
	return { id, type: 'nonterm', name };
}

// text terminal symbol
export type TextItem = { id: number, type: 'text', value: string };

export function TEXT(id: number, value: string): TextItem {
	return { id, type: 'text', value };
}

// pattern terminal symbol
export type PatternItem = { id: number, type: 'pattern', value: string };

export function PATTERN(id: number, value: string): PatternItem {
	return { id, type: 'pattern', value };
}

export type SeqItem = NonTermItem | TextItem | PatternItem;

export type Rule = {
	name: string;
	seq: SeqItem[];
};
