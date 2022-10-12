// Posts
export interface Posts {
  id: string;
  title: string;
  date: string;
  contentHtml: string;
}

// User Auth
export interface UserAuth {
  email: string;
  password: string;
}

// Date
export interface DateProps {
  dateString: string;
}
