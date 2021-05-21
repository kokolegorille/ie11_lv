defmodule Ie11Lv.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  def start(_type, _args) do
    children = [
      # Start the Ecto repository
      Ie11Lv.Repo,
      # Start the Telemetry supervisor
      Ie11LvWeb.Telemetry,
      # Start the PubSub system
      {Phoenix.PubSub, name: Ie11Lv.PubSub},
      # Start the Endpoint (http/https)
      Ie11LvWeb.Endpoint
      # Start a worker by calling: Ie11Lv.Worker.start_link(arg)
      # {Ie11Lv.Worker, arg}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Ie11Lv.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  def config_change(changed, _new, removed) do
    Ie11LvWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
