import { MouseEvent } from "react";
import { PaginationBox, ControlButton, NumberButton } from "@/styles/easy-pagination-style";

interface Props {
    prevButton: () => void;
    nextButton: () => void;
    currentButton: (e: MouseEvent<HTMLButtonElement>) => void;
    pages: string[];
}

const EasyPagination = (props: Props) => {
    const { prevButton, nextButton, currentButton, pages } = props;

    return (
        <PaginationBox>
            <ControlButton onClick={prevButton}>&lt;</ControlButton>
            {pages.map((page, idx) => {
                return (
                    <NumberButton key={idx} name={page} onClick={currentButton}>
                        {page}
                    </NumberButton>
                );
            })}
            <ControlButton onClick={nextButton}>&gt;</ControlButton>
        </PaginationBox>
    );
};

export default EasyPagination;
