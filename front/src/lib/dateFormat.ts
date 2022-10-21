const dateFormat = (start_date: string, due_date: string) => {
    // let d = new Date(userData?.start_date);
    // let e = new Date(userData?.due_date);

    const startDate = new Date(start_date);
    const endDate = new Date(due_date);

    const start = `${startDate.getMonth() + 1}/${startDate.getDate()}`;

    const end = `${endDate.getMonth() + 1}/${endDate.getDate()}`;

    return `${start} ~ ${end}`;
};

export default dateFormat;
