type Props = string | string[];

function classNames(classes: Props): string {
  const styles =
    typeof classes === "string"
      ? classes
      : classes?.reduce(
          (prev: string, current: string) => `${prev} ${current}`
        );
  return styles;
}

export default classNames;
