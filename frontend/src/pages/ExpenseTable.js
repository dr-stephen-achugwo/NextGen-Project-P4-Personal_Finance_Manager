import React from 'react';

const ExpenseTable = ({ expenses, deleteExpens }) => {

    return (
        <div className="expense-list">
            <h2>Expense Details</h2>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Description</th>
                        <th>Action</th> {/* Action Column for delete button */}
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense, index) => (
                        <tr key={index} style={styles.row}>
                            <td>{new Date(expense.createdAt).toLocaleDateString()}</td>
                            <td style={{ color: expense.amount > 0 ? '#27ae60' : '#c0392b' }}>
                                ₹{expense.amount}
                            </td>
                            <td>{expense.text}</td>
                            <td style={styles.actionCell}>
                                <button
                                    style={styles.deleteButton}
                                    onClick={() => deleteExpens(expense._id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const styles = {
    table: {
        width: '100%',
        borderCollapse: 'collapse',
    },
    row: {
        borderBottom: '1px solid #ddd',
        textAlign: 'center',
    },
    actionCell: {
        textAlign: 'center',
    },
    deleteButton: {
        backgroundColor: '#e74c3c',
        color: 'white',
        border: 'none',
        padding: '5px 10px',
        cursor: 'pointer',
        borderRadius: '4px',
        fontSize: '14px',
    },
};

export default ExpenseTable;
