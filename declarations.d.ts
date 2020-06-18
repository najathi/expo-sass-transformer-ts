// declaration.d.ts
declare module '*.scss' {
    const content: { [styleName: string]: string };
    export default content;
}

// declare module "*.svg" {
//     const content: any;
//     export default content;
// }