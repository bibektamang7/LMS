import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { affiliateTopic } from "../../../../public/constant"

export default function BecomeAffiliatePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Become a SkillForge Affiliate</h1>
        <p className="text-xl text-muted-foreground mb-12 text-center">
          Join our affiliate program and earn while helping others discover the power of online learning.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {affiliateTopic.map((benefit, index) => (
            <Card key={index}>
              <CardHeader>
                <benefit.icon className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>{benefit.title}</CardTitle>
                <CardDescription>{benefit.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Apply to Become an Affiliate</CardTitle>
            <CardDescription>Fill out the form below to start your journey as a SkillForge affiliate.</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="website">Website or Social Media Profile</Label>
                  <Input id="website" placeholder="https://" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="experience">Experience in Online Marketing</Label>
                  <Input id="experience" placeholder="Tell us about your experience" />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the terms and conditions of the SkillForge Affiliate Program
                  </Label>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Submit Application</Button>
          </CardFooter>
        </Card>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Have Questions?</h2>
          <p className="text-muted-foreground mb-4">
            Our affiliate support team is here to help you succeed. Reach out to us for any queries.
          </p>
          <Button variant="outline">Contact Affiliate Support</Button>
        </div>
      </div>
    </div>
  )
}

