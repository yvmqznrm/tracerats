# Use the base Debian image from Docker Hub
FROM debian:latest

# Install git, openssh-client and nginx
RUN apt-get update && \
    apt-get install -y git openssh-client nginx && \
    rm -rf /var/lib/apt/lists/*

# Setup ssh (create directory and set permissions)
RUN mkdir -p /root/.ssh && \
    chmod 0700 /root/.ssh

# Avoid "Are you sure you want to continue connecting" message
RUN touch /root/.ssh/known_hosts && \
    ssh-keyscan github.com >> /root/.ssh/known_hosts

RUN mkdir /tracerats

COPY . /tracerats/Website

RUN ls -lah /tracerats/Website

# Start the tracerats challenges automation
CMD ["bash", "/tracerats/Website/auto.sh"]
