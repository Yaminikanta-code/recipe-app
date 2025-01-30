import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FileInput, Input, Textarea, Card, Button } from "../components/common";
import {
  titleValidation,
  descriptionValidation,
  ingradientValidation,
  stepsValidation,
  prepTimeValidation,
} from "../validations/postValidation";

const Test = ({ defaultValues }) => {
  const [previewImage, setPreviewImage] = useState(
    defaultValues?.image?.url || null
  );

  const {
    control,
    handleSubmit,
    setError,
    clearErrors,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: defaultValues?.title || "",
      description: defaultValues?.description || "",
      ingredients:
        defaultValues?.ingredients?.map((ing) => ing.name).join(", ") || "",
      steps: defaultValues?.steps?.map((step) => ({ value: step })) || [
        { value: "" },
      ],
      prepTime: defaultValues?.prepTime || "",
      image: defaultValues?.image?.url || null,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "steps",
  });

  const handleAddStep = () => {
    const steps = getValues("steps");
    const lastStep = steps[steps.length - 1]?.value;

    if (!lastStep.trim()) {
      setError(`steps.${steps.length - 1}.value`, {
        type: "manual",
        message: "Please fill in this step before adding a new one.",
      });
    } else {
      clearErrors("steps");
      append({ value: "" });
    }
  };

  const handleImageChange = (files) => {
    if (files && files.length > 0) {
      const file = files[0];
      const imageUrl = URL.createObjectURL(file);

      setValue("image", file, { shouldValidate: true });
      setPreviewImage(imageUrl);
      clearErrors("image");
    } else {
      setError("image", {
        type: "manual",
        message: "Image is required",
      });
    }
  };

  const onSubmit = (data) => {
    //post logic

    console.log("submit", data);
  };

  return (
    <Card className="my-20 ml-8 max-w-lg">
      <form className="p-6" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-xl font-semibold mb-4">Create/Edit Recipe</h2>

        {/* Title */}
        <div className="mb-4">
          <Input
            id="title"
            label="Title"
            name="title"
            placeholder="Enter recipe title"
            control={control}
            rules={titleValidation}
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <Textarea
            id="description"
            label="Description"
            name="description"
            placeholder="Enter a brief description"
            rows={3}
            control={control}
            rules={descriptionValidation}
          />
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <Input
            id="ingredients"
            label="Ingredients (comma-separated)"
            name="ingredients"
            placeholder="e.g., coffee, milk, sugar"
            control={control}
            rules={ingradientValidation}
          />
        </div>

        {/* Steps - Dynamic Fields */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-foreground mb-2">
            Steps
          </label>
          {fields.map((field, index) => (
            <div key={field.id} className="flex flex-col space-y-1 mb-3">
              <div className="flex items-center space-x-2">
                <Input
                  id={`steps.${index}`}
                  name={`steps.${index}.value`}
                  placeholder={`Step ${index + 1}`}
                  control={control}
                  rules={stepsValidation}
                />
                {fields.length > 1 && (
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="text-red-500 cursor-pointer"
                    onClick={() => remove(index)}
                  />
                )}
              </div>
            </div>
          ))}
          <Button type="button" className="mt-2" onClick={handleAddStep}>
            <FontAwesomeIcon icon={faPlus} className="mr-1" />
            Add Step
          </Button>
        </div>

        {/* Prep Time */}
        <div className="mb-4">
          <Input
            id="prepTime"
            label="Preparation Time (minutes)"
            name="prepTime"
            type="number"
            placeholder="e.g., 20"
            control={control}
            rules={prepTimeValidation}
          />
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <FileInput
            id="image"
            label="Upload Image"
            name="image"
            accept="image/*"
            control={control}
            rules={{ required: "Image is required" }}
            onChange={(e) => handleImageChange(e.target.files)}
          />

          {/* Image Preview */}
          {previewImage && (
            <img
              src={previewImage}
              alt="Recipe Preview"
              className="mt-2 w-full h-40 object-cover rounded-md"
            />
          )}
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Card>
  );
};

export default Test;
