import React from 'react';
import ExerciseItemList from '../components/ExerciseItemList';
import { useSelector } from 'react-redux';
import { Form, Input, Select, Button, Tooltip, Icon } from 'antd';

const { Option } = Select;

function WorkoutCreate(props) {
  const exercises = useSelector(state => state.exercises);
  const { getFieldDecorator } = props.form;
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];
  const generateDayOptionsList = days =>
    days.map((day, index) => (
      <Option value={day} key={index}>
        {day}
      </Option>
    ));
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  return (
    <div id="workout-create">
      <div className="container">
        <h1>Create Workout</h1>

        <Form onSubmit={handleSubmit}>
          <Form.Item
            label={
              <span>
                Workout name&nbsp;
                <Tooltip title="What do you want the workout to be called?">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            }
          >
            {getFieldDecorator('workout_name', {
              rules: [
                {
                  required: true,
                  message: 'Please input your workout name!',
                  whitespace: true
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item
            label={
              <span>
                Workout day&nbsp;
                <Tooltip title="Choose the best day">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            }
          >
            {getFieldDecorator('day_select', {
              rules: [
                {
                  required: true,
                  message: 'Please select a day!',
                  whitespace: true
                }
              ]
            })(
              <Select className="day-select" placeholder="Select a day">
                {generateDayOptionsList(days)}
              </Select>
            )}
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Create
          </Button>
        </Form>
        <ExerciseItemList exerciseData={exercises} />
      </div>
    </div>
  );
}

export default Form.create({ name: 'create_workout' })(WorkoutCreate);
