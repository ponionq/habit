import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';


class Habits extends Component {
    handleIncrement = habit => {
        this.props.onIncrement(habit)
    }
    handleDecrement = habit => {
        this.props.onDecrement(habit)
    }
    handlDelete = habit => {
        this.props.onDelete(habit)
    }
    handAdd = name => {
        this.props.onAdd(name);
    }
    render() {
        return (
            <div className="habits">
                <>
                <HabitAddForm onAdd={this.handAdd}/>
                <ul>
                    {this.props.habits.map(habit => (
                        <Habit 
                            key = {habit.id} 
                            habit={habit}
                            count = {habit.count}
                            name = {habit.name}
                            onIncrement={this.props.onIncrement} 
                            onDecrement={this.props.onDecrement}
                            onDelete={this.props.onDelete}
                            // onDelete ={(habit) => {this.props.handlDelete(habit)}}
                        />
                ))}
                </ul>
                <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
                </>
        </div>
        )
    };
}

export default Habits;