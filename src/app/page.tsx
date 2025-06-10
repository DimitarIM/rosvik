import KeyFeatures from "@/components/KeyFeatures"
import { keyfeaturesData } from "@/data/keyfeaturesdata"

export default function Home() {
  return (
    <>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, commodi?</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum dolorum rerum, illo atque non nemo ipsam nisi nam recusandae esse obcaecati voluptates quia placeat excepturi magni quos reprehenderit beatae accusamus deserunt aliquam eius. Blanditiis ducimus laudantium debitis ab rerum? Repudiandae dolores voluptate ratione vero praesentium sit quibusdam quis nemo earum.</p>
    <main className="min-h-screen w-full">
      <KeyFeatures keyfeatures={keyfeaturesData} />
    </main>
    </>
  );
}