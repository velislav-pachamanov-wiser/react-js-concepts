import Validator from "zod";

export class FormValidator {
    static all(...fns: Array<(...args: unknown[]) => string | true>) {
        return (value: unknown) => {
            for (const fn of fns) {
                const result = fn(value)
                if (result !== true) return result
            }
            return true as const
        }
    }

    static isNotEmpty(value: string) {
        return (Validator.string().min(1).safeParse(value).success ? true : 'This field is required');
    }

    static isEmail(value: string) {
        return (Validator.email().safeParse(value).success ? true : 'This field must be a valid email address');
    }

    static isNotEmptyArray(value: any[]) {
        return (Validator.array(Validator.any()).nonempty().safeParse(value).success ? true : 'This field is required');
    }

    static minLength(min: number) {
        return (value: string) => (Validator.string().min(min).safeParse(value).success ? true : `This field must be at least ${min} characters long`);
    }

    static maxLength(max: number) {
        return (value: string) => (Validator.string().max(max).safeParse(value).success ? true : `This field must be at most ${max} characters long`);
    }

    static isNumber(value: number) {
        return (Validator.number().safeParse(value).success ? true : 'This field must be a number');
    }
}