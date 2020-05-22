export interface Resume {
  _id: string;
  objective: string;
  owners_pk: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  education: Education[];
  skills: Skills[];
  experience: Experience [];
}


export interface Skills {
  name: string;
  children: Skills[];
}

export interface Experience {
  title: string;
  company: string;
  start_date: string;
  end_date: null,
  description: string;
}

export interface Education {
  _id: string;
  education_pk: string;
  degree: string;
  start_date: string;
  end_date: string;
  description: string;
  name: string;
}
