import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export default function Documentation() {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="max-w-6xl mx-auto px-4 py-12"
    >
      <h1 className="text-4xl font-bold mb-8">Documentation</h1>
      
      <Tabs defaultValue="platform" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="platform">Platform Guide</TabsTrigger>
          <TabsTrigger value="contribute">How to Contribute</TabsTrigger>
          <TabsTrigger value="api">API (Coming Soon)</TabsTrigger>
          <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
        </TabsList>
        
        <TabsContent value="platform">
          <Card>
            <CardContent className="prose dark:prose-invert max-w-none py-6">
              <h2>Getting Started with Dev Overflow</h2>
              <p>Dev Overflow is an open-source Q&A platform built by developers, for developers. Here's how to make the most of it:</p>
              
              <h3>Key Features</h3>
              <ul>
                <li>Ask and answer questions</li>
                <li>Real-time discussions</li>
                <li>AI-powered suggestions</li>
                <li>Reputation system</li>
              </ul>
              
              {/* Add more documentation content */}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="contribute">
          <Card>
            <CardContent className="prose dark:prose-invert max-w-none py-6">
              <h2>Contributing to Dev Overflow</h2>
              <p>We welcome contributions from the community! Here's how you can help:</p>
              
              <h3>Development Setup</h3>
              <ol>
                <li>Fork the repository</li>
                <li>Clone your fork</li>
                <li>Install dependencies</li>
                <li>Create a new branch</li>
              </ol>
              
              {/* Add more contribution guidelines */}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="api">
          <Card>
            <CardContent className="prose dark:prose-invert max-w-none py-6">
              <h2>API Documentation</h2>
              <p>Our API documentation is coming soon! We're working hard to provide comprehensive API access to Dev Overflow's features.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="privacy">
          <Card>
            <CardContent className="prose dark:prose-invert max-w-none py-6">
              <h2>Privacy Policy</h2>
              <p>At Dev Overflow, we take your privacy seriously. This policy outlines how we collect, use, and protect your data.</p>
              
              <h3>Data Collection</h3>
              <p>We collect minimal data necessary to provide our services:</p>
              <ul>
                <li>Account information</li>
                <li>Questions and answers</li>
                <li>Usage analytics</li>
              </ul>
              
              {/* Add more privacy policy content */}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}
