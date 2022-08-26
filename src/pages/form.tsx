import type { NextPage } from 'next';

const Form: NextPage = () => {
  return (
    <div>
      <h1>入力フォームです</h1>
      <form action="" method="post">
        <label htmlFor="first">First Name</label>
        <input type="text" id="first" name="first" required />

        <label htmlFor="last">Last Name</label>
        <input type="text" id="last" name="last" required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
