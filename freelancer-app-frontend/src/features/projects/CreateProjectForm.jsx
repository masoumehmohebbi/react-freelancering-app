import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import RHFSelect from "../../ui/RHFselect";
import { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";

const CreateProjectForm = () => {
  const { categories } = useCategories();
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState(new Date());

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="عنوان پروژه"
        register={register}
        required
        validationSchema={{
          required: "عنوان ضروری است",
          minLengthL: {
            value: 10,
            message: "طول عنوان نامعتبر است",
          },
        }}
        errors={errors}
      />

      <RHFSelect
        required
        name="category"
        label="دسته بندی"
        register={register}
        options={categories}
      />
      <div>
        <label className="mb-2 block text-secondary-700">تگ</label>
        <TagsInput value={tags} onChange={setTags} name="tags" />
      </div>
      <DatePickerField date={date} setDate={setDate} label="ددلاین" />

      <button type="submit" className="btn btn--primary w-full">
        تایید
      </button>
    </form>
  );
};

export default CreateProjectForm;
