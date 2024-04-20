function TaskValidation (title, dueDate, priority){
    const errors = {};

    const validDueDate = new RegExp(
        '\\d{4}-\\d{2}-\\d{2}'
    );
    const validPriority = new RegExp(
        '[1-3]'
    );

    // Title validation checks
    if (title === '') {
        errors.title = " Title should not be empty!\n";
    }
    else {
        errors.title = "";
    }

    // DueDate validation checks
    if (dueDate === '') {
        errors.dueDate = " Due Date should not be empty!\n";
    }
    else if (!validDueDate.test(dueDate)) {
        errors.dueDate = " Invalid Due Date, please use the format 'YYYY-MM-DD'!\n"
    }
    else {
        errors.dueDate = "";
    }

    // Priority validation checks
    if (priority === '') {
        errors.priority = " Priority Level should not be empty!\n";
    }
    else if (!validPriority.test(priority)) {
        errors.priority = " Invalid Priority Level, please choose a number from 1 to 3!\n"
    }
    else {
        errors.priority = "";
    }

    return errors;
}


export default TaskValidation;