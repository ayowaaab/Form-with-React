import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Categories from "../expense-tracker/categories";

const schema = z.object({
  description: z.string().min(3, {message : "at least 3 characters"}).max(50),
  amount: z.number({invalid_type_error : "Amount is required"}).min(0.01).max(100_000),
  Category: z.enum(Categories, {
    errorMap: () =>({message:"Category required"}) 
  }),
});

type ExpenseFormData = z.infer<typeof schema>;

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(schema),
  });

  return (
    <>
      <form onSubmit={ handleSubmit (data => console.log(data))}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            id="description"
            type="text"
            className="form-control"
          />

          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", {valueAsNumber: true})}
            id="amount"
            type="number"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            id="category"
            className="form-select"
            {...register("Category")}
          >
            <option value=""></option>
            {Categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          {errors.Category && (
            <p className="text-danger">{errors.Category.message}</p>
          )}
        </div>
        <button disabled = {!isValid} className="btn btn-primary mb-3" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
