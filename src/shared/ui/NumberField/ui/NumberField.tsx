import styles from './NumberField.module.css'
import classNames from "classnames";
import Button from "@/shared/ui/Button/Button.tsx";

interface NumberFieldProps {
    fieldNum: number;
    description: string;
    numOfNums: number;
    maxToSelect: number;
    selectedCells: number[];
    onSelectionChange: (newSelectedCells: number[]) => void;
}

const NumberField = (props: NumberFieldProps) => {
    const { fieldNum, description, numOfNums, maxToSelect, selectedCells, onSelectionChange } = props;

    const toggleCell = (index: number) => {
        let newSelectedCells = [...selectedCells];
        if (selectedCells.includes(index)) {
            newSelectedCells = selectedCells.filter(item => item !== index);
        } else if (selectedCells.length < maxToSelect) {
            newSelectedCells.push(index);
        } else {
            newSelectedCells.shift();
            newSelectedCells.push(index);
        }
        onSelectionChange(newSelectedCells);
    };

    const cells = Array.from({ length: numOfNums }, (_, index) => (
        <div className={styles.CellContainer}
             key={index}
             onClick={() => toggleCell(index)}
        >
            <Button
                className={classNames(styles.Cell, selectedCells.includes(index) ? styles.Selected : '')}
            >{index + 1}</Button>
        </div>
    ));

    return (
        <div className={styles.Container}>
            <div className={styles.Header}>
                <span>Поле {fieldNum}</span>
                <span className="roboto-light">{description}</span>
            </div>
            <div className={styles.Grid}>
                {cells}
            </div>
        </div>
    );
};

export default NumberField;