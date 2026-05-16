'use client'

import { FileWithPreview } from "@/types/file";
import { Textarea } from "./ui/textarea";
import { Card, CardTitle } from "./ui/card";

interface FileUploadProps {
    value?: FileWithPreview[]
    onChange?: (files: FileWithPreview[]) => void;
    onRemove?: (files: FileWithPreview) => void;
    maxFiles?: number;
    maxsize?: number; //in mb
    accept?: { [key: string] : string[]};
    disabled?: boolean;
    className?: string;

}

const FileUpload = ({
    value= [],
    onChange,
    oneRemove,
    maxFiles = 1,
    maxSize = 20,
    accept = {
        "image/*": [".jpeg", ".jpg", "png", ".gif", ".webp"],
                "application/pdf": [".pdf"],
    },
    disabled = false,
    className,
}: FileUploadProps) => {
    return ( 
        <div>
            <Textarea rows={10} onChange={() => {}} />
                <Card>
                    <CardHeader>
                        <CardTitle>
                            File Upload
                        </CardTitle>
                    </CardHeader>
                </Card>
        </div>
    );
}

export default FileUpload;