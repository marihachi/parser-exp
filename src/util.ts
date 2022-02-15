import { PatternItem, Rule, SeqItem, TextItem } from './rule';

// type TreeNode<T> = {
// 	item: T;
// 	parent: TreeNode<T> | null;
// 	children: TreeNode<T>[];
// };

// export function getRuleTree(startRuleName: string, rules: Rule[]) {
// 	const startRules = rules.filter(r => r.name == startRuleName);
// 	const visited: string[] = [];
// 	function visit(rule: Rule, parent: TreeNode<Rule> | null) {
// 		const item: TreeNode<Rule> = { item: rule, parent: parent, children: [] };
// 		for (const r of rule) {
			
// 		}
// 		return tree;
// 	}

// }

export type TableItem = {
	finish: boolean;
	items: SeqItem[];
};

export type FirstCtx = {
	rules: Rule[];
	firstTable: TableItem[];
};

export function getFirst(ruleId: number, rules: Rule[], ctx: FirstCtx): boolean {
	let changed = false;
	if (ctx.firstTable[ruleId] == null) {
		ctx.firstTable[ruleId] = { items: [], finish: false };
	}
	const result = ctx.firstTable[ruleId];
	const rule = rules[ruleId];
	const seq0 = rule.seq[0];
	if (!result.finish && rule.seq.length > 0) {
		switch (seq0.type) {

		case 'text':
		case 'pattern':
			result.items.push(seq0);
			result.finish = true;
			changed = true;
			break;

		case 'nonterm':
			const ruleIds = [];
			for (let i = 0; i < rules.length; i++) {
				if (rules[i].name == seq0.name) ruleIds.push(i);
			}
			for (const id of ruleIds) {
				const nt = ctx.firstTable[id];
				if (nt != null && nt.finish) {
					result.items.push(...nt.items);
					result.finish = true;
					changed = true;
				}
			}
			break;

		}
	}
	return changed;
}
