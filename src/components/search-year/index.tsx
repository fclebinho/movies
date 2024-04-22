import React from "react";
import { FaSearch } from "react-icons/fa";
import { Input } from "../input";
import ButtonIcon from "../button-icon";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSearchParams } from "react-router-dom";

const schema = z.object({
  year: z.string(),
});

type Inputs = z.infer<typeof schema>;

const SearchYear: React.FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
> = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { register, handleSubmit } = useForm<Inputs>({
    resolver: zodResolver(schema),
    defaultValues: {
      year: searchParams.get("year") ?? "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = ({ year }) => {
    setSearchParams((state) => {
      year ? state.set("year", year) : state.delete("year");

      return state;
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        style={{
          display: "flex",
          width: "100%",
          gap: 12,
          marginBottom: 12,
        }}
        data-testid="search-text"
      >
        <Input
          type="number"
          {...props}
          style={{ width: "100%" }}
          {...register("year")}
        />

        <ButtonIcon type="submit">
          <FaSearch />
        </ButtonIcon>
      </div>
    </form>
  );
};

export default SearchYear;
