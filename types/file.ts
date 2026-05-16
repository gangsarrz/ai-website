export type FileWithPreview = {
    file: File;
    preview: string | null;
    progress: number;
    erorr?: string;
    success?: boolean;
}