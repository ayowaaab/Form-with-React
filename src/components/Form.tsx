import { Categories } from "../App";
import { useForm, FieldValues } from "react-hook-form";

import { Expense } from "../expense-tracker/components/ListExpenses";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: FieldValues) => {};

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description", { required: true, minLength: 3 })}
            id="description"
            type="text"
            className="form-control"
          />
         
          { errors.description?.type ==='required' && <p className="text-danger">The Name field is required</p>}
          { errors.description?.type === 'minLength'  && <p className="text-danger">The Name length Must be more then 3 letters</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount")}
            id="amount"
            type="number"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            id="category"
            className="form-select"
            {...register("category")}
          >
            <option value=""></option>
            {Categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary mb-3" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
