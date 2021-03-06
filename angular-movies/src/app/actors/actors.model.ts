/* Used to create actor on client side */
export interface actorCreationDTO {
  name: string;
  dateOfBirth: Date;
  picture: File;
  biography: string;
}

/* Use for retriving actor information from database */
export interface actorDTO {
  name: string;
  dateOfBirth: Date;
  picture: string;
  biography: string;
}
