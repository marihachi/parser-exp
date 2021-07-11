// Nonterminal symbol
export type NonTermItem = { nonterm: string };

export function NONTERM(name: string): NonTermItem {
	return { nonterm: name };
}
export function isNonTermItem(x: Record<string, any>): x is NonTermItem {
	return (x.nonterm != null);
}

// text terminal symbol
export type TextItem = { text: string };

export function TEXT(content: string): TextItem {
	return { text: content };
}

export function isTextItem(x: Record<string, any>): x is TextItem {
	return (x.text != null);
}

// pattern terminal symbol
export type PatternItem = { pattern: string };

export function PATTERN(content: string): PatternItem {
	return { pattern: content };
}

export function isPatternItem(x: Record<string, any>): x is PatternItem {
	return (x.pattern != null);
}

export type SeqItem = NonTermItem | TextItem | PatternItem;
export type RuleSeq = SeqItem[];

export type Rule = {
	name: string;
	seqs: RuleSeq[];
};
