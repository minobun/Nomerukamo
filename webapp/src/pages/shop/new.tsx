import Template from "@/components/templates/Template";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

type FormProps = {
    name: string;
    content?: string;
    URL?: string;
    type: string[];
}

const defaultValues = {
    name: '',
    content: '',
    URL: '',
    type: [''],
}

export default function Home() {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<FormProps>({
        mode: "onBlur",
        criteriaMode: "all",
        shouldFocusError: true,
        defaultValues,
    })

    const onSubmit: SubmitHandler<FormProps> = async (data) => {
        try {
            const res = await fetch('/api/shop', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            const result = await res.json()
            if (res.ok) {
                console.log(result)
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Template>
            <Box component="form"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Typography>新しくお店を登録してください。</Typography>
                <Controller
                    name="name"
                    control={control}
                    rules={{
                        required: "入力必須です。",
                        maxLength: {
                            value: 100,
                            message: "100文字以下で入力してください。",
                        },
                    }}
                    render={({
                        field: { onChange, onBlur, value, name, ref },
                        fieldState: { invalid, isTouched, isDirty, error },
                    }) => (
                        <TextField
                            label="name"
                            placeholder="お店の名前"
                            required
                            value={value}
                            variant="outlined"
                            margin="dense"
                            onChange={onChange}
                            onBlur={onBlur}
                            error={Boolean(error)}
                            helperText={error?.message}
                        />
                    )}
                />
                <Controller
                    name="content"
                    control={control}
                    rules={{
                        maxLength: {
                            value: 4000,
                            message: "4000文字以下で入力してください。",
                        },
                    }}
                    render={({
                        field: { onChange, onBlur, value, name, ref },
                        fieldState: { invalid, isTouched, isDirty, error },
                    }) => (
                        <TextField
                            label="content"
                            placeholder="内容"
                            multiline
                            rows={10}
                            value={value}
                            variant="outlined"
                            margin="dense"
                            onChange={onChange}
                            onBlur={onBlur}
                            error={Boolean(error)}
                            helperText={error?.message}
                        />
                    )}
                />
                <Controller
                    name="URL"
                    control={control}
                    rules={{
                        maxLength: {
                            value: 4000,
                            message: "4000文字以下で入力してください。",
                        },
                    }}
                    render={({
                        field: { onChange, onBlur, value, name, ref },
                        fieldState: { invalid, isTouched, isDirty, error },
                    }) => (
                        <TextField
                            label="URL"
                            placeholder="URL"
                            value={value}
                            variant="outlined"
                            margin="dense"
                            onChange={onChange}
                            onBlur={onBlur}
                            error={Boolean(error)}
                            helperText={error?.message}
                        />
                    )}
                />
                <Button type="submit" variant="contained">登録する</Button>
            </Box>
        </Template>
    )
};
