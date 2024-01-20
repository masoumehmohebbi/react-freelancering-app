import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import RHFSelect from "../../ui/RHFselect";
import { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";
import useCreateProject from "./useCreateProject";
import Loading from "../../ui/Loading";

const CreateProjectForm = ({ onClose }) => {
  const { categories } = useCategories();
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState(new Date());

  const { isCreating, createProject } = useCreateProject();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };
    createProject(newProject, {
      onSuccess: () => {
        onClose();
        reset();
      },
    });
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
      <TextField
        label="توضیحات"
        name="description"
        register={register}
        required
        validationSchema={{
          required: "توضیحات ضروری است",
          minLength: {
            value: 15,
            message: "حداقل 15 کاراکتر را وارد کنید",
          },
        }}
        errors={errors}
      />
      <TextField
        label="بودجه"
        name="budget"
        type="number"
        register={register}
        required
        validationSchema={{
          required: "بودجه ضروری است",
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

      <div className="!mt-8">
        {isCreating ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            تایید
          </button>
        )}
      </div>
    </form>
  );
};

export default CreateProjectForm;
