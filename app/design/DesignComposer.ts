/**
 * Created by Moises on 23/07/2017.
 */
export default class DesignComposer {

    private classComposer: string;
    private moduleTheme: any | null;

    constructor(classes: string[], modules: string[], defaultValue: string = '', theme: any | null = null) {
        this.classComposer = '';

        this.moduleTheme = theme;
        if (defaultValue !== '') {
            this.classComposer += modules[defaultValue as any] + '';
        }

        this.builder(classes, modules);
    }

    public as(...classes: string[]): string {
        for (const key of classes) {
            this.classComposer = key + '' + this.classComposer;
        }
        return this.classComposer;
    }

    public toString() {
        return this.classComposer;
    }

    private builder(classes: string[], modules: string[]) {

        for (let i: number = 0; i < classes.length; i++) {
            this.classComposer += ((i <= 0) ? '' : '') + modules[(classes as any)[i]];

            if (this.moduleTheme !== null && this.moduleTheme[classes[i]] !== undefined) {
                this.classComposer += '' + this.moduleTheme[classes[i]];
            }
        }
    }

}
