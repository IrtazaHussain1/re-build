import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function ApplyJob() {
  return (
      <Card>
        <CardHeader>
          <CardTitle>Apply Job</CardTitle>
          <CardDescription>Fill out the form below to apply for the position.</CardDescription>
          <CardDescription>We will anker your resume and cover letter and send constomized email to recruiter.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company-name">Company Name</Label>
              <Input id="company-name" placeholder="Enter company name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="job-title">Job Title</Label>
              <Input id="job-title" placeholder="Enter job title" />
            </div>
            <div className="space-y-2 col-span-full">
              <Label htmlFor="job-description">Job Description</Label>
              <Textarea id="job-description" rows={4} placeholder="Describe the job responsibilities" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="recruiter-email">Recruiter Email</Label>
              <Input id="recruiter-email" type="email" placeholder="Enter recruiter email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="resume">Resume</Label>
              <Input id="resume" type="file" accept=".pdf,.docx" />
              <p className="text-sm text-muted-foreground">Accepted file types: PDF, DOCX</p>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="ml-auto">
            Submit Application
          </Button>
        </CardFooter>
      </Card>
  )
}
