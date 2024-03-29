import { ShopProps } from '@/type';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Shop(props: ShopProps) {
    const { name, content, URL } = props;
    return (
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2">
                    {content}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">{URL}</Button>
            </CardActions>
        </Card>
    );
}