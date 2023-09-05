import { Div } from './Filter.styled';

export const Filter = ({ addFilter }) => {
  return (
    <Div>
      <h3>Find contacts by name</h3>
      <label>
        <input
          type="text"
          name="name"
        // в событие onChange передаем value ивента аргументом в метод addFilter(). Так велью инпута передается в App 
          onChange={evt => addFilter(evt.target.value)}
          placeholder="Enter name here....."
        />
      </label>
    </Div>
  );
};
