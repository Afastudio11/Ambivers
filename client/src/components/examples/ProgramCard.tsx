import ProgramCard from '../ProgramCard'
import foundationImg from "@assets/generated_images/Ambivers_Foundation_program_card_7872171c.png";

export default function ProgramCardExample() {
  return (
    <div className="max-w-sm">
      <ProgramCard
        title="Ambivers Foundation"
        description="Non-Governmental Organization (NGO) bagian dari Ambivers.id, berdiri sejak Juni 2023 dan berfokus pada pengembangan mahasiswa lewat kegiatan sosial dan pendidikan, dengan lebih dari 100 relawan yang telah berkontribusi."
        image={foundationImg}
        testId="card-foundation"
      />
    </div>
  )
}
