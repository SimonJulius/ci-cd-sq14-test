# CI CD Test

We are looking at github action


## CI Tools

- Github action
- Circle CI
- Travis CI
- Jenkins


## CD Tools

- Ansible
- Puppet
- Chef


## Containerization
- Docker
- Kubernetes

## Version control/ Source control tool

- Github
- Bitbucket
- GitLab


## Common YML commands used for github Action

- `name`: This command specifies a name for your workflow. It is a required field.

- `on`: This command specifies the events that trigger your workflow.

- `jobs`: This command is used to define one or more jobs for your workflow.

- `runs-on`: This command specifies the operating system and hardware that the job runs on.

- `steps`: This command is used to define the individual steps that are executed within a job.

- `uses`: This command is used to specify an action or a Docker container that is used in a step.

- `with`: This command is used to specify inputs and parameters for an action or a step.


### Github actions that use and what they each mean.

`actions/checkout`: This action checks out your repository code to the runner.

`actions/setup-node`: This action sets up the environment for a Node.js project.

`docker/build-push-action`: This action builds and pushes a Docker container.

`actions/upload-artifact`: This action uploads an artifact to be used in subsequent jobs.

`actions/download-artifact`: This action downloads an artifact from a previous job.

`actions/cache`: This action caches dependencies to speed up subsequent runs.

`actions/create-release`: This action creates a new release.

`actions/github-script`: This action runs a JavaScript script in the context of the GitHub API.

`actions/labeler`: This action automatically labels issues and pull requests based on configurable rules.

`actions/notify`: This action sends a notification message to a Slack channel, Microsoft Teams, or a custom webhook.

`actions/setup-python`: This action sets up the environment for a Python project.

`actions/setup-java`: This action sets up the environment for a Java project.

`actions/setup-ruby`: This action sets up the environment for a Ruby project.

`actions/setup-go`: This action sets up the environment for a Go project.

`actions/setup-elixir`: This action sets up the environment for an Elixir project.