import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from './TodoInput.vue.js';

function __VLS_template() {
let __VLS_ctx!: InstanceType<import('./__VLS_types.js').PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_localComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption & typeof __VLS_ctx;
let __VLS_otherComponents!: typeof __VLS_localComponents & import('./__VLS_types.js').GlobalComponents;
let __VLS_own!: import('./__VLS_types.js').SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots; }) >;
let __VLS_components!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
/* Style Scoped */
type __VLS_StyleScopedClasses = {} &
{ 'inputBox'?: boolean; } &
{ 'inputBox'?: boolean; } &
{ 'addContainer'?: boolean; } &
{ 'addBtn'?: boolean; };
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_templateComponents!: {};
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("inputBox shadow"), };
{
({} as JSX.IntrinsicElements).input;
(__VLS_x as JSX.IntrinsicElements)['input'] = { type: ("text"), value: ((__VLS_ctx.newTodoItem)), placeholder: ("할일을 입력하세요"), };
type __VLS_0 = JSX.IntrinsicElements['input'];
const __VLS_1: import('./__VLS_types.js').EventObject<typeof undefined, 'keyup', {}, __VLS_0['onKeyup']> = {
keyup: (__VLS_ctx.addTodo)
};
// @ts-ignore
[newTodoItem, addTodo,];
}
{
({} as JSX.IntrinsicElements).span;
({} as JSX.IntrinsicElements).span;
(__VLS_x as JSX.IntrinsicElements)['span'] = { class: ("addContainer"), };
type __VLS_2 = JSX.IntrinsicElements['span'];
const __VLS_3: import('./__VLS_types.js').EventObject<typeof undefined, 'click', {}, __VLS_2['onClick']> = {
click: (__VLS_ctx.addTodo)
};
// @ts-ignore
[addTodo,];
{
({} as JSX.IntrinsicElements).i;
({} as JSX.IntrinsicElements).i;
(__VLS_x as JSX.IntrinsicElements)['i'] = { class: ("addBtn fas fa-plus"), 'aria-hidden': ("true"), };
}
}
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses['inputBox'];
__VLS_styleScopedClasses['shadow'];
__VLS_styleScopedClasses['addContainer'];
__VLS_styleScopedClasses['addBtn'];
__VLS_styleScopedClasses['fas'];
__VLS_styleScopedClasses['fa-plus'];
}
declare var __VLS_slots: {};
return __VLS_slots;
}
