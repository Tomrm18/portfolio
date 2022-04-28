import { FC } from "react"

interface Props {
  jobTitle: string;
  company: string;
  start: string;
  finish?: string;
  type: string;
  desc: string[];
}

export const ExperienceField: FC<Props> = ({jobTitle, company, start, finish, type, desc}) => {
  return (
    <div>
      <h3><span className="job-title">{jobTitle}</span> | {company} | <span className="time">{start} - {finish ? finish : "Current"}</span> | {type}</h3>
      {desc.map((d, index) => {
        return (
          <li key={index}>{d}</li>
        )
      })}
    </div>
  )
}