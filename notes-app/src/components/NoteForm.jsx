import { useState } from 'react';
import TextInput from './inputs/TextInput';
import SelectInput from './inputs/SelectInput';
import TextAreaInput from './inputs/TextAreaInput';
const NoteForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: ' ',
    category: 'Work',
    priority: 'Medium',
    description: ' ',
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validating fields before submitting
    if (!formData.title || !formData.description) return;

    //Create Note Object
    const newNote = { id: Date.now(), ...formData };

    //Add notes to state
    setNotes([newNote, ...notes]);

    //Reset form Data
    setFormData({
      title: ' ',
      category: 'Work',
      priority: 'Medium',
      description: ' ',
    });
  };

  return (
    <>
      {/* Toggle Buitton */}
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition mb-4"
      >
        {isFormVisible ? 'Hide Form✖️' : 'Add New Notes➕'}
      </button>

      {/* Form  */}
      {isFormVisible && (
        <form onSubmit={handleSubmit} className="mb-6">
          {/* Title */}
          <TextInput
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          {/* Priority */}

          <SelectInput
            label="Priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            options={[
              { value: 'High', label: '🔴High' },
              { value: 'Medium', label: '🟡Medium' },
              { value: 'Low', label: '🟢Low' },
            ]}
          />

          {/* Category */}
          <SelectInput
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            options={[
              { value: 'Work', label: 'Work' },
              { value: 'Personal', label: 'Personal' },
              { value: 'Ideas', label: 'Ideas' },
            ]}
          />
          {/* Description */}

          <TextAreaInput
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover: bg-purple-400 ">
            Add Note
          </button>
        </form>
      )}
    </>
  );
};

export default NoteForm;
