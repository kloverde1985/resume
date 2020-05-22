export interface Resume {
  _id: string;
  objective: string;
  owners_pk: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  education: {
    _id: string;
    education_pk: string;
    degree: string;
    start_date: string;
    end_date: string;
    description: string;
    name: string;
  };
  skills: [
    {
      category: string;
      skillList: []
    },
  ];
  Experience: [
    {
      title: string;
      company: string;
      start_date: string;
      end_date: null,
      description: string;
    },
  ];
}
