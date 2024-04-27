import MagicWandSVG from './magic-wand.svg'
import Button, {ButtonTheme} from "@/shared/ui/Button/Button.tsx";

interface MagicWandProps {
    callback: () => void;
}

const MagicWand = (props: MagicWandProps) => {
    const {callback} = props;

    return (
        <Button onClick={callback} theme={ButtonTheme.clear}>
            <img src={MagicWandSVG} alt='Magic wand to randomize' />
        </Button>
    );
};

export default MagicWand;