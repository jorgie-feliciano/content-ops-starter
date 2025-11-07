import React from "react";

type Props = {
  className?: string;
  ["data-sb-field-path"]?: string;
  fieldPath?: string;
};

export default function FormBlock({ className = "", ...props }: Props) {
  const fieldPath =
    props["data-sb-field-path"] ?? props.fieldPath ?? undefined;

  return (
    <div
      className="sb-component sb-component-block sb-component-form-block"
      data-sb-field-path={fieldPath}
    >
      <form
        name="contact"
        method="POST"
        action="https://formsubmit.co/contacto@sonidovivo.org"
        className={`sb-component-form ${className}`}
      >
        <label>
          Name
          <input type="text" name="name" required />
        </label>

        <label>
          Email
          <input type="email" name="email" required />
        </label>

        <label>
          Message
          <textarea name="message" rows={4} required />
        </label>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
