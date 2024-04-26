import MagicWandSVG from '@/shared/assets/magic-wand.svg'

interface MagicWandProps {
    callback: () => void;
}

const MagicWand = (props: MagicWandProps) => {
    const {callback} = props;

    return (
        <div onClick={callback}>
            <img src={MagicWandSVG} alt='Magic wand to randomize' />
        </div>
    );
};

export default MagicWand;