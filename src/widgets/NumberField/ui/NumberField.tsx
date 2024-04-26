import styles from './NumberField.module.css'
import {useState} from "react";
import classNames from "classnames";
import Button from "@/shared/ui/Button/Button.tsx";

interface NumberFieldProps {
    fieldNum: number;
    description: string;
    numOfNums: number;
    maxToSelect: number;
}

/**
* Компонент для отображения поля с клетками для выбора чисел.
* Позволяет выбирать определенное количество клеток в соответствии с заданным лимитом.
*
* @param {Object} props Свойства компонента.
* @param {number} props.fieldNum Номер поля.
* @param {string} props.description Описание поля.
* @param {number} props.numOfNums Количество клеток для выбора.
* @param {number} props.maxToSelect Максимальное количество выбираемых клеток.
* @param {number[]} props.selectedCells Массив индексов выбранных клеток.
* @param {Function} props.onSelectionChange Функция обратного вызова для обновления выбранных клеток.
*/
const NumberField = (props: NumberFieldProps) => {

    const {fieldNum, description, numOfNums, maxToSelect} = props;
    const [selectedCells, setSelectedCells] = useState<number[]>([]);

    const toggleCell = (index: number) => {
        if (selectedCells.includes(index)) {
            setSelectedCells(selectedCells.filter(item => item !== index));
        } else if (selectedCells.length < maxToSelect) {
            setSelectedCells([...selectedCells, index]);
        } else {
            const newSelectedCells = [...selectedCells];
            newSelectedCells.shift();
            setSelectedCells([...newSelectedCells, index]);
        }
    };

    const cells = Array.from({ length: numOfNums }).map((_, index) => (
        <div className={styles.CellContainer}
             key={index}
             onClick={() => toggleCell(index)}
        >
            <Button
            className={classNames(selectedCells.includes(index) ? styles.Selected : '', styles.Cell)}
        >{index + 1}</Button>
        </div>
    ));

    return (
        <div className={styles.Container}>
            <div className={styles.Header}>
                <span>Поле {fieldNum}</span>
                <span className='roboto-light'>{description}</span>
            </div>
            <div className={styles.Grid}>
                {cells}
            </div>
        </div>
    );
};

export default NumberField;