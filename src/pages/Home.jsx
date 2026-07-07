import { useEffect, useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import FormInput from '../components/FormInput';
import { getAll, create, remove } from '../utils/api';
import { validateForm, required, minLength } from '../utils/validate';

const COLLECTION = 'items';

// This page is a working example wiring every piece together:
// form -> validation -> save -> dynamic list render -> delete.
// Delete this and build your real feature once the problem drops —
// but copy the pattern.

export default function Home() {
  const [items, setItems] = useState([]);
  const [values, setValues] = useState({ title: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setItems(getAll(COLLECTION));
  }, []);

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const schema = { title: [required, minLength(3)] };
    const fieldErrors = validateForm(values, schema);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    setLoading(true);
    const newItem = create(COLLECTION, { title: values.title });
    setItems((prev) => [...prev, newItem]);
    setValues({ title: '' });
    setLoading(false);
  }

  function handleDelete(id) {
    remove(COLLECTION, id);
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div className="page">
      <h1>Hackathon Starter</h1>
      <p>Example CRUD flow — form, validation, dynamic list, delete. Replace with your real feature.</p>

      <Card className="mb-4">
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Item title"
            name="title"
            value={values.title}
            onChange={handleChange}
            error={errors.title}
            placeholder="e.g. Build login page"
          />
          <Button type="submit" loading={loading}>Add item</Button>
        </form>
      </Card>

      <h2>Items ({items.length})</h2>
      {items.length === 0 ? (
        <div className="empty-state">No items yet. Add your first one above.</div>
      ) : (
        items.map((item) => (
          <Card key={item.id} className="mb-2">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>{item.title}</span>
              <Button variant="danger" onClick={() => handleDelete(item.id)}>Delete</Button>
            </div>
          </Card>
        ))
      )}
    </div>
  );
}
